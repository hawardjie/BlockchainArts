import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | art/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    await render(hbs`
      <Art::Image 
        src="../assets/images/PsLogo.png"
        alt="Postsea Logo"
      />
    `);

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '../assets/images/PsLogo.png')
      .hasAttribute('alt', 'Postsea Logo');
  });

  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
      <Art::Image
        src="/assets/images/PsLogo.png"
        alt="Postsea Logo"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
