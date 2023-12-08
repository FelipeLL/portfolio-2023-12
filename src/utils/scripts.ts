export const sendEmail = () => {
  const email = document.getElementById("email") as HTMLInputElement;
  const sendButton = document.getElementById("send");

  sendButton?.addEventListener("click", async () => {
    const to = email.value;
    const subject = "Let's talk";
    const body = "I'm interested in talking with you 😃";

    const mailToLink = `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailToLink;
  });
};

export const copyEmailtoClipboard = () => {
  const email = document.getElementById("email") as HTMLInputElement;
  const copyButton = document.getElementById("copy") as HTMLButtonElement;

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email.value);
      disableButton();
      activateConfetti();
    } catch (error) {
      console.error(error);
    }
  });

  const disableButton = () => {
    copyButton.disabled = true;
    copyButton.classList.add(
      "bg-slate-400",
      "dark:bg-slate-500",
      "hover:bg-slate-400",
      "dark:hover:bg-slate-500",
    );
    setTimeout(() => {
      copyButton.disabled = false;
      copyButton.classList.remove(
        "bg-slate-400",
        "dark:bg-slate-500",
        "hover:bg-slate-400",
        "dark:hover:bg-slate-500",
      );
    }, 3000);
  };
};

export const stopConfetti = () => {
  (window as any).confetti.reset();
};

const activateConfetti = () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );

  const isMobile = vw <= 640;

  (window as any).confetti({
    particleCount: 150,
    spread: isMobile ? 40 : 100,
  });
};
