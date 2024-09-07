import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const buffer = await readContacts();
    const contacts = buffer ? JSON.parse(buffer) : [];
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(JSON.stringify(contacts, null, 2));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

addOneContact();
