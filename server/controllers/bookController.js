import Book from '../models/Book.js';

//get all Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//create new Books
export const createBook = async (req, res) => {
  try {
    const { title, author, ISBN, imageUrl } = req.body;

    const newBook = await Book.create({
      title,
      author,
      ISBN,
      imageUrl,
    });
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error creating Book:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//get Books by ID
// In your backend controller
export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (book) {
      // Send the Books details in the response
      res.status(200).json({
        title: book.title,
        author: book.author,
        ISBN: book.ISBN,
        imageUrl: book.imageUrl,
      });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a book by its ISBN
export const deleteBookByISBN = async (req, res) => {
  const { ISBN } = req.params; // Assuming ISBN is provided in the URL parameters

  try {
    const deletedBook = await Book.findOneAndDelete({ ISBN });

    if (deletedBook) {
      res.status(200).json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Error deleting book:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//delete Books
// export const deleteBookById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedBook = await Book.deleteOne({ _id: id });
//     if (deletedBook.deletedCount === 1) {
//       res.status(200).json({ message: 'Book deleted successfully' });
//     } else {
//       res.status(404).json({ error: 'Book not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting book:', error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

//update Books
export const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { title, author, ISBN, imageUrl } = req.body;

  try {
    // Find the Books by _id and update it
    const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      { $set: { title, author, ISBN, imageUrl } },
      { new: true } // Return the updated document
    );

    if (updatedBook) {
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Error updating Book:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
