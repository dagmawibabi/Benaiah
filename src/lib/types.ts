export type Lang = 'en' | 'am';

export type TeamMember = {
	fullname_en: string;
	fullname_am: string;
	photo: string;
	role_en?: string;
	role_am?: string;
	socials?: Record<string, string> | { name: string; url: string }[];
};

export type Subtopic = {
	title_en: string;
	title_am: string;
	description_en?: string;
	description_am?: string;
	devotional: {
		devotional_en?: string;
		devotional_author_en?: TeamMember[];
		devotional_am?: string;
		devotional_author_am?: TeamMember[];
	};
	study_material: {
		study_material_en?: string;
		study_material_author_en?: TeamMember[];
		study_material_am?: string;
		study_material_author_am?: TeamMember[];
	};
	cover_en: string;
	cover_am: string;
	square_en: string[];
	square_am: string[];
	story_en: string[];
	story_am: string[];
	artists: TeamMember[];
};

export type Theme = {
	published: boolean;
	theme_en: string;
	theme_am: string;
	subtopics: Subtopic[];
};

export type ArticleType = 'devotional' | 'study_material';
