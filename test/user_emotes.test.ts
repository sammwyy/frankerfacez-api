import FFZ from '../src';

test('Fetch User Emotes', async () => {
  const emotes = await FFZ.getUserEmotes('280803646');
  expect(emotes.length).toBeGreaterThanOrEqual(40);
  expect(emotes.find((v) => v.name == "WideHardo")).not.toBeNull();
});
