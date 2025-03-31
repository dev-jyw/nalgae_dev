package com.nalgae.goldwings.repository;

import com.nalgae.goldwings.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
