package com.example.proyecto_c32.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table (name="exploracion_fisica")
public class Exploracion_fisica {
@Id
@GeneratedValue (strategy = GenerationType.AUTO)
    
@Column(name="id_exploracion")
private int id_exploracion;
@Column(name="peso")
private String peso;
@Column(name="estatura")
private String estatura;
@Column(name="frecuencia_cardiaca")
private String frecuencia_cardiaca;
@Column(name="frecuencia_respiratoria")
private String frecuencia_respiratoria;
@Column(name="presion_arterial")
private String presion_arterial;
@Column(name="descripcion")
private String descripcion;
@Column(name="embarazo")
private boolean embarazo;
@ManyToOne
/*  @JoinColumn (name= "id_paciente", referencedColumnName= "id")
 */Paciente paciente;
    
}
