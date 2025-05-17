package com.example.demo;

import com.example.demo.model.Ping;
import com.example.demo.repository.PingRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

// src/main/java/com/example/demo/DemoApplication.java
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner demo(PingRepository repo) {
        return args -> {
            Ping row = repo.save(Ping.builder().message("hello mysql").build());
            System.out.println("Saved id=" + row.getId());

            repo.findAll()
                    .forEach(p -> System.out.println("Fetched: " + p));
        };
    }
}
