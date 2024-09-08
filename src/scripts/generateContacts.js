import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const buffer = await readContacts();
    const prevContacts = buffer ? JSON.parse(buffer) : [];
    const generatedContacts = [];
    for (let i = 0; i < number; i++) {
      generatedContacts.push(createFakeContact());
    }

    const updatedContacts = [...prevContacts, ...generatedContacts];
    await writeContacts(JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
