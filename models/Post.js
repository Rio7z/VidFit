var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	image: { type: Types.CloudinaryImage },
	video: { type: Types.Html, wysiwyg: true, height: 330 },
	content: {
		brief: { type: Types.Html, wysiwyg: true },
		minutes: { type: Types.Html, height: 35 },
		calorie: { type: Types.Html, height: 35 },
		difficulty: { type: Types.Html, height: 35 },
		equipment: { type: Types.Html, height: 35 },
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
