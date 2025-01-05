import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private description: Record<string, string> = {
    en: 'Brief Description',
    de: 'Kurze Beschreibung',
    vi: 'Mô tả ngắn'
  }

  private tech: Record<string, string> = {
    en: 'Technologies and Languages used',
    de: 'Verwendete Technologien und Programmiersprachen',
    vi: 'Công nghệ và ngôn ngữ được sử dụng'
  }

  private try: Record<string, string> = {
    en: 'Give it a try',
    de: 'Probiere es mal',
    vi: 'Chơi thử đê'
  }

  private data: Record<string, any> = {
    en: [
      {
        name: 'Finance',
        link: 'https://github.com/minhchi1709/cs50-finance',
        description: 'simulation of stock buying with data fetching from Yahoo',
        tech: 'Python, Flask and SQLite'
      },
      {
        name: 'E-Commerce',
        link: 'https://github.com/minhchi1709/commerce',
        description: 'auction bidding and purchasing platform',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Mail',
        link: 'https://github.com/minhchi1709/mail',
        description: 'simple mail platform, users can send, read, answer and archive mails',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Social Network',
        link: 'https://github.com/minhchi1709/network',
        description: 'simple social network, users can follow, unfollow, block or unblock other users, create and comment posts',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Learning Platform',
        link: 'https://github.com/minhchi1709/network',
        description: 'simple learning platform, users (teachers or students) can create and register courses. User must authenticate registration and changing password when forgetting by email verification',
        tech: 'Java, Spring Boot, PostgreSQL and Thymeleaf'
      },
      {
        name: 'Account Management',
        link: 'https://github.com/minhchi1709/account-management',
        description: 'managing my bank account. Visualization of every transaction in a month, every month in a year and every year. Moreover, there is also a chart containing the exchange rates from EUR to VND. There are three sources: VCB, VIB and Paypal',
        tech: 'Java, Spring Boot, PostgreSQL, Typescript and Angular'
      },
      {
        name: 'Debt Management',
        link: 'https://github.com/minhchi1709/debt-management',
        description: 'managing debt for my dad. Often he needs to manage what his clients export or import and eventually printing a PDF for each invoice. There is also a visualization for every customer, every month, every year, etc',
        tech: 'Java, Spring Boot, ITextPDF, PostgreSQL, Typescript and Angular'
      },
      {
        name: 'Blackjack',
        link: 'https://github.com/minhchi1709/blackjack',
        description: 'a blackjack platform, where you play with a bot. There is no server since I only intended to deploy it in github pages and I used Angular for this purpose',
        tech: 'Typescript and Angular',
        try: 'https://minhchi1709.github.io/blackjack'
      }
    ],
    de: [
      {
        name: 'Finanz',
        link: 'https://github.com/minhchi1709/cs50-finance',
        description: 'Simulation eines Aktienkaufs mit Datenabruf von Yahoo',
        tech: 'Python, Flask and SQLite'
      },
      {
        name: 'E-Commerce',
        link: 'https://github.com/minhchi1709/commerce',
        description: 'Auktions-Gebots- und Einkaufsplattform',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Mail',
        link: 'https://github.com/minhchi1709/mail',
        description: 'einfache Mailplattform, Benutzer können Mails versenden, lesen, beantworten und archivieren',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Soziale Netzwerk',
        link: 'https://github.com/minhchi1709/network',
        description: 'einfaches soziales Netzwerk, Benutzer können anderen Benutzern folgen, ihnen nicht mehr folgen, sie blockieren oder die Blockierung aufheben, Beiträge erstellen und kommentieren',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Lernen-Plattform',
        link: 'https://github.com/minhchi1709/network',
        description: 'einfache Lernplattform, Benutzer (Lehrer oder Schüler) können Kurse erstellen und registrieren. Der Benutzer muss die Registrierung authentifizieren und das Passwort ändern, wenn er es vergessen hat, per E-Mail-Verifizierung',
        tech: 'Java, Spring Boot, PostgreSQL and Thymeleaf'
      },
      {
        name: 'Kontomanagement',
        link: 'https://github.com/minhchi1709/account-management',
        description: 'Verwaltung meines Bankkontos. Visualisierung jeder Transaktion in einem Monat, in jedem Monat in einem Jahr und in jedem Jahr. Darüber hinaus gibt es auch ein Diagramm mit den Wechselkursen von EUR zu VND. Es gibt drei Quellen: VCB, VIB und Paypal',
        tech: 'Java, Spring Boot, PostgreSQL, Typescript and Angular'
      },
      {
        name: 'Schuldenmanagement',
        link: 'https://github.com/minhchi1709/debt-management',
        description: 'Schuldenverwaltung für meinen Vater. Oft muss er verwalten, was seine Kunden exportieren oder importieren und schließlich für jede Rechnung ein PDF ausdrucken. Es gibt auch eine Visualisierung für jeden Kunden, jeden Monat, jedes Jahr usw.',
        tech: 'Java, Spring Boot, ITextPDF, PostgreSQL, Typescript and Angular'
      },
      {
        name: 'Blackjack',
        link: 'https://github.com/minhchi1709/blackjack',
        description: 'eine Blackjack-Plattform, auf der Sie mit einem Bot spielen. Es gibt keinen Server, da ich es nur auf GitHub-Seiten bereitstellen wollte und zu diesem Zweck Angular verwendet habe.',
        tech: 'Typescript and Angular',
        try: 'https://minhchi1709.github.io/blackjack'
      }
    ],
    vi: [
      {
        name: 'Tài chính',
        link: 'https://github.com/minhchi1709/cs50-finance',
        description: 'mô phỏng việc mua cổ phiếu bằng cách lấy dữ liệu từ Yahoo',
        tech: 'Python, Flask and SQLite'
      },
      {
        name: 'Thương mại điện tử',
        link: 'https://github.com/minhchi1709/commerce',
        description: 'nền tảng đấu giá và mua hàng',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Mail',
        link: 'https://github.com/minhchi1709/mail',
        description: 'nền tảng thư (giống GMail) đơn giản, người dùng có thể gửi, đọc, trả lời và lưu trữ thư',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Mạng xã hội',
        link: 'https://github.com/minhchi1709/network',
        description: 'mạng xã hội đơn giản, người dùng có thể theo dõi, bỏ theo dõi, chặn hoặc bỏ chặn người dùng khác, tạo và bình luận bài đăng',
        tech: 'Python, Django and SQLite'
      },
      {
        name: 'Nền tảng học tập',
        link: 'https://github.com/minhchi1709/network',
        description: 'nền tảng học tập đơn giản, người dùng (giáo viên hoặc học sinh) có thể tạo và đăng ký khóa học. Người dùng phải xác thực đăng ký và thay đổi mật khẩu khi quên bằng cách xác minh email',
        tech: 'Java, Spring Boot, PostgreSQL and Thymeleaf'
      },
      {
        name: 'Quản lý tài khoản',
        link: 'https://github.com/minhchi1709/account-management',
        description: 'quản lý tài khoản ngân hàng của tôi. Hình ảnh hóa mọi giao dịch trong một tháng, mọi tháng trong một năm và mọi năm. Ngoài ra, còn có biểu đồ chứa tỷ giá hối đoái từ EUR sang VND. Có ba nguồn: VCB, VIB và Paypal',
        tech: 'Java, Spring Boot, PostgreSQL, Typescript and Angular'
      },
      {
        name: 'Quản lý công nợ',
        link: 'https://github.com/minhchi1709/debt-management',
        description: 'quản lý nợ cho bố tui. Thường thì ông ấy cần quản lý những gì khách hàng của mình xuất hoặc nhập và cuối cùng là in PDF cho mỗi hóa đơn. Ngoài ra còn có biểu đồ trực quan cho mỗi khách hàng, mỗi tháng, mỗi năm, v.v.',
        tech: 'Java, Spring Boot, ITextPDF, PostgreSQL, Typescript and Angular'
      },
      {
        name: 'Xì Dzách',
        link: 'https://github.com/minhchi1709/blackjack',
        description: 'một nền tảng Xì Dzách, nơi bạn chơi với một bot. Không có máy chủ vì tôi chỉ định triển khai nó trong các trang github và tôi sử dụng Angular cho mục đích này',
        tech: 'Typescript and Angular',
        try: 'https://minhchi1709.github.io/blackjack'
      }
    ],
  }

  public getDescription(lang: string): string {
    return this.description[lang] || this.description['en'];
  }

  public getTech(lang: string): string {
    return this.tech[lang] || this.tech['en']
  }

  public getData(lang: string) {
    return this.data[lang] || this.data['en']
  }

  public getTry(lang: string) {
    return this.try[lang] || this.try['en']
  }
}
