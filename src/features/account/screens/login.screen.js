import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthButton } from "../components/account.styles";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { onLogin, isLoading, error } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(val) => setEmail(val)}
          dense
        />
        <Spacer size="medium">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(val) => setPassword(val)}
            dense
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
