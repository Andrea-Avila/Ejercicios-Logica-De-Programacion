
// package tiposDeDatosYVariablesDos;
import java.util.Scanner;

public class HolaReves {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingresa un mensaje: ");
		String mensaje = scanner.nextLine();
		String mensajeReverso = reverse(mensaje);
		System.out.println("Tu mensaje al revés es: " + mensajeReverso);
		scanner.close();
	}

	public static String reverse(String mensaje) {
		return new StringBuilder(mensaje).reverse().toString();
	}
}