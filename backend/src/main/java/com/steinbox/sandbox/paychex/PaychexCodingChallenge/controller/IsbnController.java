package com.steinbox.sandbox.paychex.PaychexCodingChallenge.controller;

import com.steinbox.sandbox.paychex.PaychexCodingChallenge.Isbn;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class IsbnController {

    @RequestMapping("/isbn/{isbn}")
    @CrossOrigin("http://localhost:4200")
    public Object isbnValidation(@PathVariable(name = "isbn") String isbn) {
        Map map = new HashMap<String, Object>();
        map.put("isbn", isbn);
        map.put("validity", Isbn.isValid(isbn));
        return map;
    }
}
