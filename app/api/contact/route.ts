import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Nodemailer Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // z.B. "smtp.gmail.com"
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true für Port 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER, // Deine E-Mail
        pass: process.env.SMTP_PASS, // Dein App-Passwort
      },
    })

    const {
      formMode,
      fahrzeugtyp,
      hersteller,
      modell,
      kilometerstand,
      vorname,
      nachname,
      plz,
      email,
      telefon,
      erreichbarkeit,
      nachricht,
      timestamp
    } = data

    // E-Mail an Lemoine
    const mailToLemoine = {
      from: process.env.SMTP_USER,
      to: 'info@lemoine-nutzfahrzeuge.de', // Kundenmailadresse
      subject: `Neue ${formMode === 'kaufen' ? 'Kauf' : 'Verkauf'}anfrage - ${fahrzeugtyp}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">🚛 Neue ${formMode === 'kaufen' ? 'Kaufanfrage' : 'Verkaufsanfrage'}</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Eingang: ${new Date(timestamp).toLocaleString('de-DE')}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e40af; margin-top: 0;">Fahrzeug-Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0; font-weight: bold;">Fahrzeugtyp:</td><td>${fahrzeugtyp}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Hersteller:</td><td>${hersteller}</td></tr>
              ${modell ? `<tr><td style="padding: 5px 0; font-weight: bold;">Modell:</td><td>${modell}</td></tr>` : ''}
              ${kilometerstand ? `<tr><td style="padding: 5px 0; font-weight: bold;">Kilometerstand:</td><td>${kilometerstand}</td></tr>` : ''}
            </table>

            <h2 style="color: #1e40af;">Kontakt-Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0; font-weight: bold;">Name:</td><td>${vorname} ${nachname}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">PLZ:</td><td>${plz}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">E-Mail:</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Telefon:</td><td><a href="tel:+49${telefon}">+49 ${telefon}</a></td></tr>
              ${erreichbarkeit ? `<tr><td style="padding: 5px 0; font-weight: bold;">Erreichbarkeit:</td><td>${erreichbarkeit}</td></tr>` : ''}
            </table>

            ${nachricht ? `
              <h2 style="color: #1e40af;">Nachricht</h2>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                ${nachricht}
              </div>
            ` : ''}
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; font-weight: bold; color: #1e40af;">💡 Nächste Schritte:</p>
              <p style="margin: 5px 0 0 0;">Kunde innerhalb von 24h kontaktieren für ${formMode === 'kaufen' ? 'Beratungstermin' : 'Fahrzeugbewertung'}.</p>
            </div>
          </div>
        </div>
      `
    }

    // Bestätigungs-E-Mail an Kunden
    const mailToCustomer = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Ihre Anfrage bei Lemoine Nutzfahrzeuge - ${fahrzeugtyp}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">Vielen Dank für Ihre Anfrage!</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Lemoine Nutzfahrzeuge - Ihr Partner seit 1998</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px;">
            <p>Liebe/r ${vorname} ${nachname},</p>
            
            <p>vielen Dank für Ihr Interesse an unseren Nutzfahrzeugen! Wir haben Ihre ${formMode === 'kaufen' ? 'Kaufanfrage' : 'Verkaufsanfrage'} für einen <strong>${fahrzeugtyp}</strong> erhalten.</p>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #1e40af;">⏱️ Wie geht es weiter?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Wir melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen</li>
                <li>${formMode === 'kaufen' ? 'Kostenlose Beratung zu passenden Fahrzeugen' : 'Professionelle Bewertung Ihres Fahrzeugs'}</li>
                <li>Terminvereinbarung für Besichtigung in Bielefeld</li>
                <li>Transparente Abwicklung ohne versteckte Kosten</li>
              </ul>
            </div>

            <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">📞 Für dringende Fragen:</h3>
              <p style="font-size: 24px; font-weight: bold; margin: 0;">0521 / 123 456 78</p>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Mo-Fr: 8:00-18:00 | Sa: 9:00-14:00</p>
            </div>

            <p>Mit freundlichen Grüßen<br>
            <strong>Ihr Team von Lemoine Nutzfahrzeuge</strong><br>
            Brönninghauser Str. 35B, 33729 Bielefeld</p>
          </div>
        </div>
      `
    }

    // E-Mails versenden
    await transporter.sendMail(mailToLemoine)
    await transporter.sendMail(mailToCustomer)

    return NextResponse.json({ success: true, message: 'E-Mails wurden erfolgreich versendet' })

  } catch (error) {
    console.error('E-Mail Fehler:', error)
    return NextResponse.json(
      { success: false, message: 'Fehler beim Versenden der E-Mail' },
      { status: 500 }
    )
  }
}