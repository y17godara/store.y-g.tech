"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AuthCard } from "@/components/auth/auth-card";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";

import { newVerification } from "@/actions/newVerification";

export default function VerificationCard() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <>
      <AuthCard
        header='Confirm your email'
        footer='Back to login'
        footerLink='/auth/login'
        showSocials={false}
      >
        <div className='flex w-full items-center justify-center'>
          {!success && !error && (
            <>
              <p className='text-'>Verifying...</p>
            </>
          )}
          <FormSuccess message={success} />
          {!success && <FormError message={error} />}
        </div>
      </AuthCard>
    </>
  );
}
