package com.nguyen.ecom.service;


import com.nguyen.ecom.entity.Order;
import com.nguyen.ecom.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrders(int page, int limit, String key, String status) {
        System.out.println(page + " " + limit + " " + key + " " + status);
        Pageable pageable = PageRequest.of(page - 1, limit);
//        Order orders = orderRepository.findAll();
        return orderRepository.findAll();
    }
}
