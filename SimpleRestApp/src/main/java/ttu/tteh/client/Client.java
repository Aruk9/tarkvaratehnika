package ttu.tteh.client;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Client {
	@Id
	@GeneratedValue
	long id;
	String clientName;
	String clientMail;
	
	

	
}
