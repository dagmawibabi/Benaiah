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
	// Media is optional: not every article has a video, a Short or a narration.
	// Videos and Shorts are YouTube URLs; narrations are links to the audio post
	// on our Telegram channels (benaiah_org for English, Benaiah_Amharic for Amharic).
	devotional: {
		devotional_en?: string;
		devotional_author_en?: TeamMember[];
		devotional_video_en?: string;
		devotional_short_en?: string;
		devotional_narration_en?: string;
		devotional_am?: string;
		devotional_author_am?: TeamMember[];
		devotional_video_am?: string;
		devotional_short_am?: string;
		devotional_narration_am?: string;
	};
	study_material: {
		study_material_en?: string;
		study_material_author_en?: TeamMember[];
		study_material_video_en?: string;
		study_material_short_en?: string;
		study_material_narration_en?: string;
		study_material_am?: string;
		study_material_author_am?: TeamMember[];
		study_material_video_am?: string;
		study_material_short_am?: string;
		study_material_narration_am?: string;
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
