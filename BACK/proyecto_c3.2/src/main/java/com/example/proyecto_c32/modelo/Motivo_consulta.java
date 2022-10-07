package com.example.proyecto_c32.modelo;
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
@Table (name="motivo_consulta")
public class Motivo_consulta{
@Id
@GeneratedValue (strategy = GenerationType.AUTO)
@Column(name="id_motivoconsulta")
private int id_motivoconsulta;
@Column(name="motivo")
private String motivo;
@Column(name="hora_llegada")
private String hora_llegada;

/* @ManyToOne
@JoinColumn (name= "id_paciente")
Paciente paciente;
} */
@ManyToOne
/*  @JoinColumn (name= "id_paciente", referencedColumnName= "id")
 */Paciente paciente;
} 

