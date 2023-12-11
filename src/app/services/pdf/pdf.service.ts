import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Boleta } from 'src/app/modules/admin/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }


  generatePDF(boleta: Boleta): void {
    const pdf = new jsPDF();

    pdf.text("D'JACKELYN SALÓN-SPA", 10, 20);
    pdf.text('Av Guillero Billingursht 1152, S.J.M.', 10, 30);

    // Header with dynamic information
    pdf.text(`Boleta de Venta Electrónica - ${boleta.codigo}`, 120, 25);

    // Dates
    const fechaEmision = new Date().toLocaleDateString();
    pdf.text(`Fecha de Emisión: ${fechaEmision}`, 10, 50);
    const fechaVencimiento = new Date();
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 15); // Assuming 15 days
    pdf.text(`Fecha de Vencimiento: ${fechaVencimiento.toLocaleDateString()}`, 10, 60);

    // Customer details
    pdf.text(`Cliente: ${boleta.datosPersonales.nombre} ${boleta.datosPersonales.apellidos}`, 10, 70);
    pdf.text(`DNI: ${boleta.datosPersonales.documento}`, 10, 80);
    pdf.text(`Tipo de pago: ${boleta.tipoPago}`, 10, 90);


    // Table with product details
    pdf.text('Productos Comprados:', 10, 105);
    pdf.setFillColor(200, 220, 255); // Background color for the table header
    pdf.rect(10, 110, 190, 10, 'F'); // Table header rectangle

    // Table headers
    pdf.text('Cantidad', 12, 117);
    pdf.text('Nombre del Producto', 50, 117);
    pdf.text('Precio Unidad', 120, 117);
    pdf.text('Precio Total', 170, 117);

    // Table rows
    let yPosition = 130;
    boleta.productos.forEach((producto) => {
      pdf.text(producto.quantity.toString(), 12, yPosition);
      pdf.text(producto.name, 50, yPosition);
      pdf.text('S/' + producto.price.toString(), 130, yPosition);
      pdf.text('S/' + (producto.quantity * producto.price).toString(), 175, yPosition);

      yPosition += 10;
    });

    // Sum total
    const sumTotal = boleta.productos.reduce((total, producto) => total + (producto.quantity * producto.price), 0);
    pdf.text(`Total: S/${sumTotal}`, 159, yPosition + 10);


    pdf.save('boleta.pdf');
  }

}
