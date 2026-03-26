interface Props {
  message?: string
}

function ErrorBanner({ message = 'Impossible de charger les ressources. Veuillez rafraîchir la page.' }: Props) {
  return (
    <div className="error">
      ⚠️ {message}
    </div>
  )
}

export default ErrorBanner
