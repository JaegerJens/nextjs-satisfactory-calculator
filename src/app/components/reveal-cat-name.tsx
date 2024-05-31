import { readFile } from 'fs/promises';
import { RevealButton } from './reveal-button';

export const RevealCatName = async () => {
    const content = await readFile('./src/app/_data/cat-names.json', { encoding: 'utf-8' });
    const catList = JSON.parse(content) as string[];
    const randomCat = catList[Math.floor(Math.random() * catList.length)];
    return <RevealButton secret={randomCat} />;
}
