export const SITE_URL = 'https://schienbeinblog.netlify.app/';
export const APPROVED_POSTERS_GH_USERNAME = ['michael-schienbein-fhr'];
export const GH_USER_REPO = 'michael-schienbein-fhr/blog'; // used for pulling github issues and offering comments
export const SITE_TITLE = "Michael Schienbein's Blog";
export const SITE_DESCRIPTION = "Learning in public while creating tutorials based on things I'm experimenting with.";
export const DEFAULT_OG_IMAGE =
	'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png';
export const MY_TWITTER_HANDLE = 'mschien_';
// export const MY_YOUTUBE = 'https://youtube.com/fact0';
export const POST_CATEGORIES = ['Tutorial', 'Note', 'Essay', 'Tips']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting