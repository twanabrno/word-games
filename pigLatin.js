function translateToPigLatin(word) {
    const vowels = 'aeiouAEIOU';
    const firstLetter = word[0];
    
    if (vowels.includes(firstLetter)) {
        return word + 'way';
    }

    if (word.length > 1 && !vowels.includes(word[0]) && !vowels.includes(word[1])) {
        return word.slice(2) + word.slice(0, 2) + 'ay';
    }

    if (!vowels.includes(firstLetter)) {
        return word.slice(1) + firstLetter + 'ay';
    }

    return word;
}

function translatePhraseToPigLatin(phrase) {
    return phrase
        .split(' ')
        .map(translateToPigLatin)
        .join(' ');
}

const inputPhrase = process.argv.slice(2).join(' ');

const translatedPhrase = translatePhraseToPigLatin(inputPhrase);
console.log(translatedPhrase);