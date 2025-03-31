package com.nalgae.goldwings.controller;

import com.nalgae.goldwings.model.Book;
import com.nalgae.goldwings.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        System.out.println(book.toString());
        return bookService.save(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") Long id, @RequestBody Book book) {
        return bookService.findById(id)
                .map(existing -> {
                    existing.setTitle(book.getTitle());
                    existing.setAuthor(book.getAuthor());
                    existing.setPublisher(book.getPublisher());
                    existing.setPrice(book.getPrice());
                    existing.setQuantity(book.getQuantity());
                    return ResponseEntity.ok(bookService.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable("id") Long id) {
        if (bookService.findById(id).isPresent()) {
            bookService.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
