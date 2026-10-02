/**
 * Test script for Benaiah Mobile API Endpoints (/api/v1/articles/...)
 * 
 * Usage:
 *   node test-api.mjs [baseUrl]
 * 
 * Examples:
 *   node test-api.mjs
 *   node test-api.mjs http://localhost:5173
 *   node test-api.mjs https://benaiah.vercel.app
 */

const BASE_URL = process.argv[2] || process.env.API_BASE_URL || 'http://localhost:5173';

const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	green: '\x1b[32m',
	red: '\x1b[31m',
	yellow: '\x1b[33m',
	cyan: '\x1b[36m',
	dim: '\x1b[2m'
};

let passed = 0;
let failed = 0;

async function runTest(name, urlPath, validator) {
	const fullUrl = `${BASE_URL}${urlPath}`;
	process.stdout.write(`Testing: ${colors.cyan}${name}${colors.reset}\n  ${colors.dim}${fullUrl}${colors.reset} ... `);

	try {
		const res = await fetch(fullUrl);
		let data = null;
		try {
			data = await res.json();
		} catch {
			// In case response is not JSON
		}

		const result = validator(res, data);

		if (result === true) {
			console.log(`${colors.green}✓ PASSED${colors.reset} (${res.status})`);
			passed++;
		} else {
			console.log(`${colors.red}✗ FAILED${colors.reset} (${res.status})`);
			console.log(`    ${colors.red}Reason: ${result}${colors.reset}`);
			if (data) {
				console.log(`    ${colors.dim}Response: ${JSON.stringify(data).slice(0, 200)}...${colors.reset}`);
			}
			failed++;
		}
	} catch (err) {
		console.log(`${colors.red}✗ ERROR${colors.reset}`);
		console.log(`    ${colors.red}${err.message}${colors.reset}`);
		failed++;
	}
}

async function main() {
	console.log(`\n${colors.bright}=== Benaiah Mobile API Test Suite ===${colors.reset}`);
	console.log(`Target Base URL: ${colors.yellow}${BASE_URL}${colors.reset}\n`);

	// --- 1. Endpoint 1: Get All Themes ---
	await runTest('1. Get All Themes', '/api/v1/articles', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (!Array.isArray(data)) return 'Expected array of themes';
		if (data.length === 0) return 'Received empty theme array';
		const first = data[0];
		if (!first.slug || !first.title?.en || !first.subtopics) {
			return 'First theme item is missing expected fields (slug, title.en, subtopics)';
		}
		return true;
	});

	// --- 2. Endpoint 2: Get Single Theme ---
	await runTest('2. Get Single Theme (love-faith-and-hope)', '/api/v1/articles/love-faith-and-hope', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (data.slug !== 'love-faith-and-hope') return `Expected slug "love-faith-and-hope", got "${data.slug}"`;
		if (!Array.isArray(data.subtopics) || data.subtopics.length === 0) return 'Subtopics array missing or empty';
		return true;
	});

	await runTest('2b. Get Single Theme (names-of-god)', '/api/v1/articles/names-of-god', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (data.slug !== 'names-of-god') return `Expected slug "names-of-god", got "${data.slug}"`;
		return true;
	});

	// --- 3. Endpoint 3: Get Single Subtopic ---
	await runTest('3. Get Subtopic (love-faith-and-hope / love)', '/api/v1/articles/love-faith-and-hope/love', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (data.slug !== 'love') return `Expected slug "love", got "${data.slug}"`;
		if (!data.available_content?.devotional) return 'Missing available_content.devotional';
		if (!data.covers?.en) return 'Missing covers.en';
		return true;
	});

	await runTest('3b. Get Subtopic (names-of-god / jehovah-jireh)', '/api/v1/articles/names-of-god/jehovah-jireh', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (data.slug !== 'jehovah-jireh') return `Expected slug "jehovah-jireh", got "${data.slug}"`;
		return true;
	});

	// --- 4. Endpoint 4: Get Single Article (Cleaned Markdown) ---
	await runTest('4a. Devotional English (love-faith-and-hope / love)', '/api/v1/articles/love-faith-and-hope/love/devotional_en', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (!data.content || typeof data.content !== 'string') return 'Missing or invalid content string';
		if (!data.title) return 'Missing article title';
		if (data.type !== 'devotional' || data.lang !== 'en') return 'Incorrect type or lang fields';
		return true;
	});

	await runTest('4b. Study Material Amharic (love-faith-and-hope / love)', '/api/v1/articles/love-faith-and-hope/love/study_material_am', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (!data.content || data.content.length < 50) return 'Content missing or unexpectedly short';
		if (data.type !== 'study_material' || data.lang !== 'am') return 'Incorrect type or lang fields';
		return true;
	});

	await runTest('4c. Devotional English (names-of-god / jehovah-jireh)', '/api/v1/articles/names-of-god/jehovah-jireh/devotional_en', (res, data) => {
		if (res.status !== 200) return `Expected status 200, got ${res.status}`;
		if (!data.content) return 'Missing content';
		if (!data.title) return 'Missing title';
		return true;
	});

	// --- 5. Error & Validation Handling ---
	await runTest('5a. Error Handling: Non-existent Theme (404)', '/api/v1/articles/non-existent-theme', (res, data) => {
		if (res.status !== 404) return `Expected status 404, got ${res.status}`;
		if (!data?.error) return 'Expected error message in response';
		return true;
	});

	await runTest('5b. Error Handling: Invalid Slug Format (400)', '/api/v1/articles/love-faith-and-hope/love/invalid_slug', (res, data) => {
		if (res.status !== 400) return `Expected status 400, got ${res.status}`;
		if (!data?.error) return 'Expected error message in response';
		return true;
	});

	await runTest('5c. Error Handling: Invalid Language (400)', '/api/v1/articles/love-faith-and-hope/love/devotional_fr', (res, data) => {
		if (res.status !== 400) return `Expected status 400, got ${res.status}`;
		if (!data?.error) return 'Expected error message in response';
		return true;
	});

	await runTest('5d. Error Handling: Non-existent Subtopic (404)', '/api/v1/articles/love-faith-and-hope/non-existent-subtopic', (res, data) => {
		if (res.status !== 404) return `Expected status 404, got ${res.status}`;
		return true;
	});

	// --- Summary ---
	console.log(`\n${colors.bright}=== Test Results ===${colors.reset}`);
	console.log(`Passed: ${colors.green}${passed}${colors.reset}`);
	console.log(`Failed: ${failed > 0 ? colors.red : colors.green}${failed}${colors.reset}`);
	console.log(`Total:  ${passed + failed}\n`);

	if (failed > 0) {
		process.exit(1);
	}
}

main();
