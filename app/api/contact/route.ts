// /app/api/contact/route.ts (Vollständige Version)
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  console.log('🚀 Dual E-Mail System gestartet')
  
  try {
    const data = await request.json()
    console.log('✅ Anfrage von:', data.vorname, data.nachname, `(${data.email})`)

    // Environment Check
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ success: false, message: 'SMTP Config fehlt' }, { status: 500 })
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    })

    const {
      formMode, fahrzeugtyp, hersteller, modell, kilometerstand,
      vorname, nachname, plz, email, telefon, erreichbarkeit, nachricht
    } = data

    // 1. E-Mail an LEMOINE (Geschäftsanfrage)
    const businessEmail = {
      from: process.env.SMTP_USER,
      to: 'rasmus.paweletz@gmail.com', // Hier später info@lemoine-nutzfahrzeuge.de
      subject: `🚛 Neue ${formMode === 'kaufen' ? 'Kaufanfrage' : 'Verkaufsanfrage'} - ${vorname} ${nachname}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 24px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700;">
              🚛 Neue ${formMode === 'kaufen' ? 'Kaufanfrage' : 'Verkaufsanfrage'}
            </h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">
              Eingang: ${new Date().toLocaleString('de-DE')}
            </p>
          </div>

          <div style="background: white; padding: 24px;">
            
            <div style="background: #f1f5f9; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0 0 16px 0; color: #1e40af; font-size: 18px;">🚗 Fahrzeug Details</h2>
              <table style="width: 100%; font-size: 14px;">
                <tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Typ:</td><td style="color: #6b7280;">${fahrzeugtyp}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Hersteller:</td><td style="color: #6b7280;">${hersteller}</td></tr>
                ${modell ? `<tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Modell:</td><td style="color: #6b7280;">${modell}</td></tr>` : ''}
                ${kilometerstand ? `<tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Kilometerstand:</td><td style="color: #6b7280;">${kilometerstand}</td></tr>` : ''}
              </table>
            </div>

            <div style="background: #ecfdf5; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0 0 16px 0; color: #065f46; font-size: 18px;">👤 Kontakt Details</h2>
              <table style="width: 100%; font-size: 14px;">
                <tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Name:</td><td style="color: #6b7280;">${vorname} ${nachname}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">PLZ:</td><td style="color: #6b7280;">${plz}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">E-Mail:</td><td><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td></tr>
                <tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Telefon:</td><td><a href="tel:${telefon}" style="color: #3b82f6;">${telefon}</a></td></tr>
                ${erreichbarkeit ? `<tr><td style="padding: 4px 0; font-weight: 600; color: #374151;">Erreichbar:</td><td style="color: #6b7280;">${erreichbarkeit}</td></tr>` : ''}
              </table>
            </div>

            ${nachricht ? `
              <div style="background: #fef3c7; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h2 style="margin: 0 0 12px 0; color: #92400e; font-size: 18px;">💬 Nachricht</h2>
                <p style="margin: 0; color: #78350f; line-height: 1.5;">${nachricht}</p>
              </div>
            ` : ''}

            <div style="background: #dbeafe; padding: 20px; border-radius: 12px; text-align: center;">
              <h3 style="margin: 0 0 12px 0; color: #1e40af;">⚡ Sofort kontaktieren</h3>
              <p style="margin: 8px 0;">
                <a href="tel:${telefon}" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                  📞 ${telefon}
                </a>
              </p>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                Innerhalb 24h anrufen für beste Conversion!
              </p>
            </div>

          </div>
        </div>
      `
    }

    // 2. Bestätigungs-E-Mail an KUNDE
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `✅ Ihre ${formMode === 'kaufen' ? 'Kauf' : 'Verkauf'}sanfrage bei Lemoine Nutzfahrzeuge`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          
          <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 24px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700;">✅ Vielen Dank für Ihre Anfrage!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Lemoine Nutzfahrzeuge - Ihr Partner seit 1998</p>
          </div>

          <div style="background: white; padding: 24px; border-radius: 0 0 16px 16px;">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151;">
              Hallo ${vorname},
            </p>
            
            <p style="color: #6b7280; line-height: 1.6;">
              vielen Dank für Ihr Interesse an unseren Nutzfahrzeugen! Wir haben Ihre <strong>${formMode === 'kaufen' ? 'Kaufanfrage' : 'Verkaufsanfrage'}</strong> für einen <strong>${fahrzeugtyp}</strong> von <strong>${hersteller}</strong> erhalten.
            </p>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #3b82f6;">
              <h3 style="margin: 0 0 16px 0; color: #1e40af; font-size: 18px;">⏰ Wie geht es weiter?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.6;">
                <li>Wir melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen</li>
                <li>${formMode === 'kaufen' ? 'Kostenlose Beratung zu passenden Fahrzeugen' : 'Professionelle Bewertung Ihres Fahrzeugs'}</li>
                <li>Terminvereinbarung für Besichtigung in Bielefeld</li>
                <li>Transparente Abwicklung ohne versteckte Kosten</li>
              </ul>
            </div>

            <div style="background: #dc2626; color: white; padding: 20px; border-radius: 12px; text-align: center; margin: 24px 0;">
              <h3 style="margin: 0 0 12px 0; font-size: 18px;">🚨 Dringend?</h3>
              <p style="font-size: 28px; font-weight: 700; margin: 8px 0; letter-spacing: 1px;">
                0521 / 390 622 2
              </p>
              <p style="margin: 0; opacity: 0.9; font-size: 14px;">
                Mo-Fr: 9:00-18:00 Uhr | Sa: 10:00-14:00 Uhr
              </p>
            </div>

            <div style="background: #f9fafb; padding: 20px; border-radius: 12px; margin-top: 24px;">
              <h3 style="margin: 0 0 12px 0; color: #374151;">🏢 Lemoine Nutzfahrzeuge</h3>
              <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.5;">
                Brönninghauser Str. 35B<br>
                33729 Bielefeld<br><br>
                <strong>27 Jahre Erfahrung</strong> • <strong>4.8/5 Google-Bewertung</strong> • <strong>Freier Händler</strong>
              </p>
            </div>

            <p style="color: #6b7280; margin-top: 24px; line-height: 1.6;">
              Mit freundlichen Grüßen<br>
              <strong>Ihr Team von Lemoine Nutzfahrzeuge</strong>
            </p>
          </div>
        </div>
      `
    }

    // Beide E-Mails parallel versenden
    console.log('📮 Sende beide E-Mails...')
    const [businessResult, customerResult] = await Promise.all([
      transporter.sendMail(businessEmail),
      transporter.sendMail(customerEmail)
    ])

    console.log('✅ Business E-Mail:', businessResult.messageId)
    console.log('✅ Kunden E-Mail:', customerResult.messageId)

    return NextResponse.json({ 
      success: true, 
      message: 'Anfrage gesendet! Sie erhalten eine Bestätigungsmail.',
    })

  } catch (error) {
    console.error('❌ E-Mail Fehler:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'E-Mail konnte nicht gesendet werden. Bitte direkt anrufen: 0521 / 390 622 2'
    }, { status: 500 })
  }
}