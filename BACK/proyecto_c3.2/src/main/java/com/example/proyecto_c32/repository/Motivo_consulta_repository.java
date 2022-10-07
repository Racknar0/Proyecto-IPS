package com.example.proyecto_c32.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.proyecto_c32.modelo.Motivo_consulta;
@Repository
public interface Motivo_consulta_repository extends JpaRepository<Motivo_consulta, Integer> {

    
}
