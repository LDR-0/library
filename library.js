const library = [];

function GodModBook(title, author, year, genre, pages) {
    return { title, author, year, genre, pages };
}

function incorporateBook(book) {
    library.push(book);
    console.log(`Книга "${book.title}" (${book.author}, ${book.year}) добавлена в библиотеку`);
}

function PurgeBook(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
        console.log(`Книга "${title}" удалена из библиотеки`);
    } else {
        console.log(`Книга "${title}" не найдена в библиотеке`);
    }
}

function Deity(author) {
    const books = library.filter(book => book.author === author);
    if (books.length > 0) {
        console.log(`Найдены книги автора ${author}:`);
        books.forEach(book => console.log(`"${book.title}" (${book.year})`));
    } else {
        console.log(`Книги автора ${author} не найдены`);
    }
}

function Gender(genre) {
    const books = library.filter(book => book.genre === genre);
    if (books.length > 0) {
        console.log(`Найдены книги жанра "${genre}":`);
        books.forEach(book => console.log(`"${book.title}" (${book.author}, ${book.year})`));
    } else {
        console.log(`Книги жанра "${genre}" не найдены`);
    }
}

function genderReport() {
    const genres = {};
    library.forEach(book => {
        genres[book.genre] = genres[book.genre] + 1 || 1;
    });
    console.log("Отчет о количестве книг каждого жанра в библиотеке:");
    for (const genre in genres) {
        console.log(`${genre}: ${genres[genre]}`);
    }
}

incorporateBook(GodModBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310));
incorporateBook(GodModBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223));
incorporateBook(GodModBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328));

PurgeBook("1984");

Deity("Дж. Р. Р. Толкиен");
Gender("Фэнтези");

genderReport();
