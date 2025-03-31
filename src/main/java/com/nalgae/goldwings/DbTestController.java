package com.nalgae.goldwings;

import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class DbTestController {

    private final DataSource dataSource;

    @GetMapping("/db")
    public String testDb() throws SQLException {
        try (Connection conn = dataSource.getConnection()) {
            return "✅ DB 연결 성공! URL = " + conn.getMetaData().getURL();
        }
    }
}
