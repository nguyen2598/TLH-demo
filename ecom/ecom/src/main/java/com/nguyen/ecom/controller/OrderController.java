package com.nguyen.ecom.controller;

import com.nguyen.ecom.entity.Order;
import com.nguyen.ecom.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    List<Order> getOrders(@RequestParam(defaultValue = "1") int page,
                          @RequestParam(defaultValue = "10") int limit,
                          @RequestParam(required = false) String key,
                          @RequestParam(required = false) String status
    ) {
        return orderService.getOrders(page, limit, key, status);
    }
}
