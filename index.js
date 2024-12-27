import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>我的网站</title>
        <meta name="description" content="简洁现代的网站" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎访问
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>X模块 &rarr;</h2>
            <p>这里是X模块的描述内容</p>
          </div>

          <div className={styles.card}>
            <h2>Token模块 &rarr;</h2>
            <p>这里是Token模块的描述内容</p>
          </div>

          <div className={styles.card}>
            <h2>Doc模块 &rarr;</h2>
            <p>这里是文档模块的描述内容</p>
          </div>
        </div>
      </main>
    </div>
  )
}