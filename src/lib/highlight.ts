// A small syntax highlighter for the code samples on /developers. It returns
// escaped HTML with <span class="tok-*"> wrappers; the page styles the classes.

export type CodeLang = 'json' | 'js' | 'jsx' | 'bash';

type Rule = [kind: string, pattern: RegExp];

const STRING = /'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\.|[^`\\])*`/y;

const rules: Record<CodeLang, Rule[]> = {
	json: [
		['comment', /\/\/[^\n]*/y],
		['key', /"(?:\\.|[^"\\\n])*"(?=\s*:)/y],
		['string', /"(?:\\.|[^"\\\n])*"/y],
		['number', /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/y],
		['literal', /\b(?:true|false|null)\b/y],
		['punct', /[{}[\],:]/y]
	],
	js: [
		['comment', /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
		['string', STRING],
		[
			'keyword',
			/\b(?:const|let|var|function|return|if|else|for|of|in|async|await|try|catch|finally|throw|new|import|from|export|default)\b/y
		],
		['literal', /\b(?:true|false|null|undefined)\b/y],
		['number', /\b\d+(?:\.\d+)?\b/y],
		['function', /\b[A-Za-z_$][\w$]*(?=\s*\()/y],
		['property', /(?<=\.)[A-Za-z_$][\w$]*/y],
		['punct', /[{}[\]();,.=>+\-*/!?:&|]/y]
	],
	jsx: [],
	bash: [
		['comment', /#[^\n]*/y],
		['string', /'[^'\n]*'|"(?:\\.|[^"\\\n])*"/y],
		['function', /(?<=^|\n|\|\s*)[a-z][\w-]*/y],
		['keyword', /(?<=\s)--?[A-Za-z][\w-]*/y],
		['punct', /[|\\]/y]
	]
};

// JSX is JavaScript plus tags, checked before the JS rules so `<View>` isn't
// read as operators.
rules.jsx = [
	['comment', /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
	['punct', /=>/y],
	['tag', /<\/?[A-Z][\w.]*|\/?>/y],
	...rules.js.slice(1)
];

const escape = (s: string) =>
	s.replace(/[&<>"]/g, (c) => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot' }[c]};`);

export function highlight(code: string, lang: CodeLang): string {
	let html = '';
	let plain = '';
	let i = 0;
	outer: while (i < code.length) {
		for (const [kind, pattern] of rules[lang]) {
			pattern.lastIndex = i;
			const match = pattern.exec(code);
			if (match && match[0]) {
				html += escape(plain) + `<span class="tok-${kind}">${escape(match[0])}</span>`;
				plain = '';
				i += match[0].length;
				continue outer;
			}
		}
		plain += code[i++];
	}
	return html + escape(plain);
}
