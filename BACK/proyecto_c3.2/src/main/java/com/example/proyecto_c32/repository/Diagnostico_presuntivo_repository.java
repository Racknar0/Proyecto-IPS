package com.example.proyecto_c32.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proyecto_c32.modelo.Diagnostico_presuntivo;

@Repository
public interface Diagnostico_presuntivo_repository extends JpaRepository<Diagnostico_presuntivo, Integer> {

    
}
