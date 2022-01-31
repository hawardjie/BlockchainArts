import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch('/api/arts.json');
        let { data } = await response.json();

        return data.map((model) => {
            let { attributes } = model;
            let type = 'Community'
            return { type, ...attributes };
        });
    }
}