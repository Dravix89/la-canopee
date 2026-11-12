export default function NewsletterBox() {
  return (
    <div className="paint news" style={{ minHeight: 0, padding: "62px 40px 110px" }}>
      <i className="p"><b /></i>
      <h3>Restez inspiré, restez informé</h3>
      <p>Recevez nos actualités, nos histoires et nos façons d&apos;aider.</p>
      <form className="sub" action="/register" method="get">
        <input type="email" name="email" placeholder="Votre e-mail" required />
        <button type="submit">S&apos;abonner</button>
      </form>
    </div>
  );
}
