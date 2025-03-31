package com.nalgae.goldwings;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello Goldwings! 🛫";
    }

    @GetMapping("/test")
    public String test() {
        return "test Goldwings! 🛫";
    }

}
