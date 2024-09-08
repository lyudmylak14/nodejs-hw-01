import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const buffer = await readContacts();
    const contacts = buffer ? JSON.parse(buffer) : [];
    return contacts.reduce((acc) => {
      return acc + 1;
    }, 0);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
console.log(await countContacts());
