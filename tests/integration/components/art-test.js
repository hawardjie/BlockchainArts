import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | art', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a digital art', async function (assert) {
    this.setProperties({
      art: {
        title: 'Apple Melon',
        type: 'Fruit',
        owner: 'Samuel Brown',
        date: 'Jan 29th, 2022',
        price: '12 WETH',
        image: '../assets/arts/apple-melon.jpg',
        description: 'Digital art of Apple Melon',
      },
    });

    await render(hbs`<Art @art={{this.art}} />`)

    assert.dom('article').hasClass('art');
    assert.dom('article h3').hasText('Apple Melon');
    assert.dom('article .detail.owner').includesText('Samuel Brown');
    assert.dom('article .detail.type').includesText('Fruit');
    assert.dom('article .detail.date').includesText('Jan 29th, 2022');
    assert.dom('article .detail.price').includesText('12 WETH');
    assert.dom('article .image').exists();
  });
});
