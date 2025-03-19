import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function NotchJP() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />
      <div className="flex flex-col items-center justify-center text-center px-8 pt-16 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold mb-8 ${spaceGrotesk.className}`}>
              Notch – パフォーマンス向けモーショントラッキング
            </h1>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                こんにちは！ (Hello!)
              </p>
              <p>
                私は東京に長く滞在することが多く、日本のスポーツテクノロジー・イノベーションコミュニティとつながることを楽しみにしています。私は <span className="font-bold">モーショントラッキング、AIを活用した動作分析、ウェアラブルテクノロジー</span> を専門とし、同じ志を持つ方々とのコラボレーションに興味があります。
              </p>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>Notchとは？</h2>
                <p>
                  私は <span className="font-bold">Notchの創業者兼CTO</span> であり、Notchは <span className="font-bold">モーショントラッキングを再定義するウェアラブルセンサー技術</span> を開発しています。Notchの <span className="font-bold">マルチセンサーシステム</span> は、<span className="font-bold">高精度な3Dモーションデータ</span> をキャプチャし、<span className="font-bold">リアルタイムAIによるフィードバック</span> を提供します。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>動作フォームとバイオメカニクスの分析</li>
                  <li>可動域と動作の質の測定</li>
                  <li>疲労や怪我のリスク評価</li>
                  <li>パフォーマンスの最適化</li>
                </ul>
                <p>
                  この技術は <span className="font-bold">フィットネス、リハビリ、ヘルスケア分野</span> において大きな影響を与えており、多くのプロフェッショナルから高い評価を受けています。
                </p>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>実証されたテクノロジー</h2>
                <p>
                  Notchのセンサーは <span className="font-bold">150以上のモーションパラメータを分析</span> し、<span className="font-bold">フォーム追跡、疲労の洞察、リアルタイムコーチング</span> を提供します。
                </p>
                <p>
                  <span className="font-bold">80本以上の査読付き論文（Nature含む）で検証済み</span> であり、世界中の研究者がスポーツ科学、バイオメカニクス、リハビリ分野でNotchを活用しています。
                </p>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>Notch Strength Lab – ストレングストレーニングのためのモーショントラッキング</h2>
                <div className="relative w-full pt-[56.25%] mb-8">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/bzu9WR8o0pU?si=kcfDfhSW632yk6Eb"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p>
                  現在、私たちは <span className="font-bold">ストレングストレーニングの分野にモーショントラッキングを導入</span> するため、Notch Strength Lab を開発しています。これにより、アスリートは以下のデータを取得できます。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>フォーム追跡と動作の効率性</li>
                  <li>主要リフトにおける可動域の測定</li>
                  <li>疲労モニタリングと動作の安定性分析</li>
                  <li>長期的なパフォーマンスのトレンド把握</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>日本市場での実績</h2>
                <div className="relative w-full pt-[56.25%] mb-8">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/PHITXVGzzyg?si=ztNz_Hj2olA9xhVQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p>
                  私たちは Sportstech Tokyo に参加し、<span className="font-bold">AIを活用したヨガモーショントラッキングソリューション Yoganotch</span> を発表しました。また、Innovation World Cup にも選出され、Notchは革新的なウェアラブルテクノロジーとして認識されています。
                </p>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>コラボレーションにご興味がありますか？</h2>
                <p>
                  私は <span className="font-bold">日本の企業、スポーツテックスタートアップ、イノベーター</span> の皆様とつながり、モーショントラッキング、バイオメカニクス、パフォーマンス向上技術について議論できることを楽しみにしています。
                </p>
                <p>
                  Notchについて詳しくはこちら: <a href="https://wearnotch.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">wearnotch.com</a>
                </p>
                <p>
                  ご興味がありましたら、ぜひご連絡ください！ → <Link href="/contact" className="text-accent hover:underline">iameszter.com/contact</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
