import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const buffer = await readContacts();
    const contacts = buffer ? JSON.parse(buffer) : [];
    if (contacts.length > 0) {
      const updatedContacts = contacts.slice(0, -1);
      await writeContacts(JSON.stringify(updatedContacts, null, 2));
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
