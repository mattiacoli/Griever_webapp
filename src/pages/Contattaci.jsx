import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

export default function Contattaci() {
  const navigator = useNavigate()
  const [state, handleSubmit] = useForm("xgvzqydb");

  if (state.succeeded) {
    return (
      <div className="contact-success text-center">
        <div className="success-message">
          Grazie per averci contattato! Ti risponderemo presto.
        </div>

        <button className='btn btn-primary mt-3' onClick={() => navigator("/")}>
          Torna alla pagina principale
        </button>
      </div>

    );
  }

  return (
    <div className="contact-form">
      <h2>Contattaci</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Il tuo nome"
            required
          />
          <ValidationError
            prefix="Nome"
            field="name"
            errors={state.errors}
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="La tua email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Scrivi qui il tuo messaggio..."
            required
          />
          <ValidationError
            prefix="Messaggio"
            field="message"
            errors={state.errors}
            className="error-message"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="form-button"
        >
          {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
        </button>
      </form>
    </div>
  );
}