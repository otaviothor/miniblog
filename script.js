Vue.component("repo-item", {
    props: ["repo"],
    methods: {
        goToRepo(repoURL) {
            window.open(repoURL, "_blank");
        },
    },
    template: `
      <li class="list-item" v-on:click="goToRepo(repo.html_url)">
        <span class="name">{{ repo.name }}</span>
        <span class="description">{{ repo.description }}</span>
      </li>
    `,
});

const repos = new Vue({
    el: "#repos",
    data: {
        repos: [],
        user: "otaviothor",
    },
    methods: {
        getRepos() {
            fetch(
                `https://api.github.com/users/${this.user}/repos?per_page=100&sort=created`
            )
                .then((res) => res.json())
                .then((data) => (this.repos = data));
        },
    },
    beforeMount() {
        this.getRepos();
    },
});
