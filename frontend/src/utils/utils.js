import { surpriseMePrompts } from "../constants/supriseMePrompts.js";
import FileSaver from 'file-saver';
export const getRandomPrompts = (prompt) => {
    const randIndex = Math.round(surpriseMePrompts.length * Math.random());
    const randPrompt = surpriseMePrompts[randIndex];

    if (randPrompt === prompt) return getRandomPrompts(prompt)

    return randPrompt
}
export async function downloadImage (_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
