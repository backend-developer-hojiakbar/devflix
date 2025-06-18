import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, CheckCircle, ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTelegramBot } from "@/hooks/useTelegramBot";
import axios from 'axios';

const Index = () => {
  const { toast } = useToast();
  const { phoneNumber, setPhoneNumber, isLoading, error, sendPhoneNumber } = useTelegramBot();

  const features = [
    { icon: Zap, text: "1 oyda dasturlash asoslarini o'rganing" },
    { icon: Target, text: "Real loyihalar ustida ishlash" },
    { icon: Sparkles, text: "Mentor yordami 24/7" },
    { icon: CheckCircle, text: "Kurs tugagach ish topishda yordam" },
    { icon: CheckCircle, text: "Sertifikat berish" },
    { icon: CheckCircle, text: "Online va offline formatlar" }
  ];

  return (
    <div className="h-screen bg-black overflow-hidden relative">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-blue-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-2/3 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-900"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-100 rounded-full animate-pulse delay-600"></div>
      </div>
      
      <div className="relative h-full">
        
        <div className="relative h-full container mx-auto px-4 flex flex-col">
          {/* Enhanced Header */}
          <header className="flex justify-between items-center py-3 bg-gray-900/50 rounded-xl mt-2 px-6 border border-gray-700">
            <div className="text-2xl font-bold text-white">
              Devflix
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+998335040098" className="flex items-center gap-2 text-white hover:text-green-400 transition-all transform hover:scale-110 bg-gray-800 px-4 py-2 rounded-lg border border-green-500/30">
                <Phone size={18} className="text-green-400" />
                <span className="font-bold text-sm">33 504 00 98</span>
              </a>
              <a href="https://t.me/devflix" className="flex items-center gap-2 text-white hover:text-blue-400 transition-all transform hover:scale-110 bg-gray-800 px-4 py-2 rounded-lg border border-blue-500/30">
                <MessageCircle size={18} className="text-blue-400" />
                <span className="font-bold text-sm">@devflix</span>
              </a>
            </div>
          </header>

          {/* Main Content - Centered Single Column */}
          <div className="flex-1 flex flex-col justify-center items-center text-center py-4 space-y-6">
            <div className="space-y-4">
              <Badge className="text-sm px-6 py-2 bg-green-500/20 text-green-400 border-green-500/50 animate-pulse">
                BIR OYDA DASTURCHI BO'LISH
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                BU ORZU EMAS!
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Zamonaviy dasturlash texnologiyalarini o'rganing va 30 kun ichida o'z kareerangizni boshlang
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 text-white font-bold transform hover:scale-105 transition-all shadow-2xl"
                  >
                    XOZIROQ JOY BAND QILING
                    <ArrowRight className="ml-3" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/50 border border-gray-700" aria-describedby="dialog-description">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">
                      Ariza berish
                    </DialogTitle>
                  </DialogHeader>
                  <div id="dialog-description" className="text-gray-300 mt-4">
                    Telefon raqamingizni quyidagi formatda kiriting: +998 XX XXX XX XX
                  </div>
                  <div className="flex flex-col gap-4">
                    {error ? (
                      <div className="text-red-400 text-sm">{error}</div>
                    ) : null}
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-300">Telefon raqamingiz</label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+998 XX XXX XX XX"
                        className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500/50"
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full text-lg bg-green-500 hover:bg-green-600 text-white font-bold transform hover:scale-105 transition-all shadow-2xl"
                      onClick={() => sendPhoneNumber(phoneNumber)}
                      disabled={isLoading || !phoneNumber}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Yuborilmoqda...</span>
                        </div>
                      ) : (
                        <>
                          YUBORISH
                          <ArrowRight className="ml-3" size={20} />
                        </>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/20 transform hover:scale-105 transition-all"
                onClick={() => window.open('https://t.me/devflix', '_blank')}
              >
                <MessageCircle className="mr-3" size={20} />
                Telegramga azo bo'lish
              </Button>
            </div>

            {/* Course Start Date */}
            <div className="flex items-center gap-6 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="text-center">
                <div className="text-lg text-blue-400 font-semibold">KURS BOSHLANADI</div>
                <div className="text-4xl md:text-5xl font-black text-green-400">10/4</div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-green-400 to-blue-400"></div>
              <div className="text-base text-gray-300">
                <span className="text-green-400 font-bold">Joylar soni cheklangan!</span><br />
                Erta ro'yxatdan o'ting
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-green-500/50 transition-all transform hover:scale-105">
                  <CardContent className="p-4 flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{feature.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Footer */}
          <footer className="py-3 bg-gray-900/50 rounded-xl mb-2 px-6 border border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold text-white">Devflix</div>
              <div className="flex items-center gap-4">
                <a href="tel:+998335040098" className="flex items-center gap-2 text-white hover:text-green-400 transition-all transform hover:scale-110 bg-gray-800 px-4 py-2 rounded-lg border border-green-500/30">
                  <Phone size={18} className="text-green-400" />
                  <span className="font-bold text-sm">33 504 00 98</span>
                </a>
                <a href="https://t.me/devflix" className="flex items-center gap-2 text-white hover:text-blue-400 transition-all transform hover:scale-110 bg-gray-800 px-4 py-2 rounded-lg border border-blue-500/30">
                  <MessageCircle size={18} className="text-blue-400" />
                  <span className="font-bold text-sm">@devflix</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;