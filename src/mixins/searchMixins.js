export default {
    computed: {
        filteredBlogs: function () {
            return this.arrBlog.filter((articles) => {
                return articles.title.match(this.search);
            });
        }
    }
}