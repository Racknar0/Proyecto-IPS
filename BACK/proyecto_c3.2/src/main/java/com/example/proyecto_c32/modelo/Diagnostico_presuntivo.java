package com.example.proyecto_c32.modelo;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table (name="diagnostico_presuntivo")
public class Diagnostico_presuntivo {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column(name="id_diagnostico")
    private int id_diagnostico;
    @Column(name="descripcion")
    private String descripcion;
    /*  @Column(name="id_paciente")
    private int id_paciente;  */
   
 @ManyToOne
 private Paciente paciente;
}
    

