package com.nguyen.ecom.repository;

import com.nguyen.ecom.entity.Order;
import com.nguyen.ecom.entity.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public interface OrderRepository extends JpaRepository<Order,String> {

//    boolean existsByUsername(String username);
//    @Query("SELECT o FROM Order o " +
//            "INNER JOIN OrderDetail od " +
//            "ON o.id = od.orderId.id " )
//    Page<Order> findByUsernameAndStatus(@Param("key") String key, @Param("status") String status, Pageable pageable);

//    @Query("SELECT u FROM User u " +
//            "INNER JOIN Role r " +
//            "ON u.role.id = r.id " +
//            "WHERE LOWER(u.username) LIKE LOWER(CONCAT('%', :key, '%'))" )
//    Page<Order> findByUsername(@Param("key") String key, Pageable dpageable);
//
//    @Query("SELECT u FROM User u " +
//            "INNER JOIN Role r " +
//            "ON u.role.id = r.id " +
//            "WHERE " +
//            "(" +
//                "(u.destroyTime IS NULL AND :status = 'enable') " +
//                "OR " +
//                "(u.destroyTime IS NOT NULL AND :status = 'disable') " +
//                "OR " +
//                ":status = 'all' " +
//                "OR " +
//                ":status = '' " +
//                "OR " +
//                ":status IS NULL" +
//            ")"
//    )
//    Page<Order> findByStatus(String status, Pageable dpageable);

//    @Query("SELECT o FROM Order o " +
//            "INNER JOIN OrderDetail od " +
//            "ON o.id = od.orderId.id " )
//    Page<Order> findAll(Pageable dpageable);



}
