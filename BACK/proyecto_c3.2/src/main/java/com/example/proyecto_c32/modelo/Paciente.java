package com.example.proyecto_c32.modelo;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="paciente")
public class Paciente {

//ATRIBUTOS
@GeneratedValue (strategy = GenerationType.AUTO) 
@Id
@Column(name="id")
    private int id;
@Column(name="nombres")
    private String nombres;
@Column(name="apellidos")
    private String apellidos;
@Column(name="documento")
    private int documento;
@Column(name="edad")
    private int edad;
@Column(name="fecha_nacimiento")
    private String fecha_nacimiento;
@Column(name="email")
    private String email;
@Column(name="direccion")
    private String direccion;
@Column(name="telefono")
    private String telefono;
@Column(name="sexo")
    private String sexo;

@OneToMany (targetEntity = Diagnostico_presuntivo.class, cascade = CascadeType.ALL)
@JoinColumn (name= "id_paciente", referencedColumnName= "id")
private List<Diagnostico_presuntivo> diagnostico_presuntivo;

@OneToMany (targetEntity = Motivo_consulta.class, cascade = CascadeType.ALL)
@JoinColumn (name= "id_paciente", referencedColumnName= "id")
private List<Motivo_consulta> motivo_consulta;

@OneToMany (targetEntity = Antecedentes_no_patologicos.class, cascade = CascadeType.ALL)
@JoinColumn (name= "id_paciente", referencedColumnName= "id")
private List<Antecedentes_no_patologicos> antecedentes_no_patologicos;

@OneToMany (targetEntity = Antecedentes_patologicos.class, cascade = CascadeType.ALL)
@JoinColumn (name= "id_paciente", referencedColumnName= "id")
private List<Antecedentes_patologicos> antecedentes_patologicos;

@OneToMany (targetEntity = Exploracion_fisica.class, cascade = CascadeType.ALL)
@JoinColumn (name= "id_paciente", referencedColumnName= "id")
private List<Exploracion_fisica> exploracion_fisica;

@Override
public String toString() {
    return "Paciente [id=" + id + ", nombres=" + nombres + ", apellidos=" + apellidos + ", documento=" + documento
            + ", edad=" + edad + ", fecha_nacimiento=" + fecha_nacimiento + ", email=" + email + ", direccion="
            + direccion + ", telefono=" + telefono + ", sexo=" + sexo + ", diagnostico_presuntivo="
            + diagnostico_presuntivo + ", motivo_consulta=" + motivo_consulta + ", antecedentes_no_patologicos="
            + antecedentes_no_patologicos + ", antecedentes_patologicos=" + antecedentes_patologicos
            + ", exploracion_fisica=" + exploracion_fisica + "]";
}


}
