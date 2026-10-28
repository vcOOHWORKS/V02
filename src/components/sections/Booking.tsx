import { Motif } from "@/components/ui/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { booking, clinic } from "@/content/site";
import { categories } from "@/content/treatments";
import { ConsultForm } from "./ConsultForm";
import styles from "./Booking.module.css";

const concerns = [...categories.map((c) => c.title), "Not sure yet"];

// An invitation card resting on the brick band, like a patrika on silk.
// `defaultConcern` preselects a treatment when the section sits on its page.
export function Booking({ defaultConcern }: { defaultConcern?: string }) {
  return (
    <section className={`grain ${styles.section}`} id="book">
      <Motif name="hoysala" stroke="rgba(243,239,233,.13)" className={styles.mandala} />

      <div className={`wrap ${styles.inner}`}>
        <Reveal className={styles.card}>
          <span className={styles.seal} aria-hidden="true" />

          <div className={styles.intro}>
            <h2 className={`display ${styles.title}`}>
              {booking.title[0]} <em>{booking.title[1]}</em>
            </h2>
            <p className={styles.body}>{booking.body}</p>

            <ul className={styles.promises}>
              {booking.promises.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className={styles.contact}>
              <p className={styles.contactLabel}>Prefer to talk?</p>
              <dl>
                <div>
                  <dt>Call</dt>
                  <dd>{clinic.phone}</dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    {clinic.whatsapp ? (
                      <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        Message us
                      </a>
                    ) : (
                      "Number to be added"
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{clinic.hours}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className={styles.formSide}>
            <ConsultForm
              concerns={concerns}
              defaultConcern={defaultConcern ?? "Not sure yet"}
              times={booking.times}
              consent={booking.consent}
              confirmationTitle={booking.confirmationTitle}
              confirmationBody={booking.confirmationBody}
              whatsapp={clinic.whatsapp}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
