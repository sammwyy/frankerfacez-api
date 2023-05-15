import FFZ from '../src';

test('Fetch User Info', async () => {
  const user = await FFZ.getUser('280803646');
  expect(user.room._id).toBe(888124);
  expect(user.room.id).toBe('sammwy');
});
