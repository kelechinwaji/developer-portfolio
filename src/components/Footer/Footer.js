import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/jidoggs'
      className='link footer__link'
    >
      © {new Date().getFullYear()} Olajide Shonuga
    </a>
  </footer>
)

export default Footer
